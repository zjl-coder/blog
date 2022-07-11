# docker shell 自动化脚本

## 删除docker镜像的shell命令
1. 比如，我们需要删除所有仓库名为 redis 的镜像
  ```bash
  docker image rm $(docker image ls -q redis)
  ```
2. 或者删除所有在 mongo:3.2 之前的镜像：
  ```bash
  # -f 后面传过滤条件
  docker image rm $(docker image ls -q -f before=mongo:3.2)
  ```

## 自动化更新docker容器shell脚本
```bash
#!/bin/bash

# 镜像名称
imagesName="csighub.tencentyun.com/kinronzhang/blockchain-oms"
# 镜像版本
DOCKER_VERSION="test"
# 容器名称
containerName="bcotest"
# 前端项目名称
frontName="tea-app-blockchain-oms-front"
# 前端项目分支
branchFront="dev"
# 后端项目名称
nodeName="blockchain-oms"
# 后端项目分支
branchNode="dev"

echo "判断${containerName}容器是否在运行"

# 判断对应名称的容器是否在运行，是则删除
if [[ -n $(docker ps -q -f "name=^${containerName}$") ]];then
        echo "container is runing, stop it"
        docker stop $containerName
else
        echo "container not exist"
fi

echo "判断${containerName}容器是否存在"

# 判断对应名称的容器是否存在，存在则删除
if [[ -n $(docker container ls -a -q -f "name=^${containerName}$") ]];then
        echo "container is exist, remove it"
        docker rm $containerName
else
        echo "container not exist"
fi

echo "判断${imagesName}镜像是否存在"

# 判断对应名称的镜像是否存在，存在则删除
if [[ -n $(docker images -q ${imagesName}) ]];then
        echo "images is exist, remove it"
        docker image ls -q ${imagesName}
        docker image rm $(docker image ls -q ${imagesName})
else
        echo "images not exist"
fi

echo "进入前端项目根目录，构建项目"

# 进入前端项目根目录，构建项目
cd ./${frontName}

echo pwd

echo "git checkout ${branchFront}"

git checkout $branchFront

echo "git pull"

git pull

echo "npm i"

npm i

echo "npm run build"

npm run build

echo "进入node项目根目录，构建项目"

# 进入node项目根目录，构建项目
cd ../${nodeName}

echo pwd

echo "git checkout ."

git checkout .

echo "git checkout ${branchNode}"

git checkout $branchNode

echo "git pull"

git pull

echo "npm i"

npm i

echo  "返回shell脚本所在目录"

# 进入shell脚本所在目录
cd ../

echo pwd

echo "cp ./${frontName}/dist/* ./${nodeName}/public"
# 前端静态资源移入node服务
cp ./${frontName}/dist/* ./${nodeName}/public

echo "mv ./dockerrun.sh ./${nodeName}/dockerrun.sh"
# 更新dockerrun.sh
mv ./dockerrun.sh ./${nodeName}/dockerrun.sh

echo "进入node项目根目录，构建镜像"

cd $nodeName

echo pwd

echo "正在制作镜像"

docker build --network=host -t ${imagesName}:${DOCKER_VERSION} .

echo "启动容器"

docker run -d -p 8080:3000 --name=${containerName} ${imagesName}:${DOCKER_VERSION}

docker ps
```