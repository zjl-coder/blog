<TitleList></TitleList>

# docker shell 自动化脚本

### 删除docker镜像
删除docker镜像的shell命令  

1. 比如，我们需要删除所有仓库名为 redis 的镜像
  ```bash
  docker image rm $(docker image ls -q redis)
  ```
2. 或者删除所有在 mongo:3.2 之前的镜像：
  ```bash
  # -f 后面传过滤条件
  docker image rm $(docker image ls -q -f before=mongo:3.2)
  ```

### shell echo输出颜色
[shell脚本中echo显示内容带颜色](https://www.cnblogs.com/lr-ting/archive/2013/02/28/2936792.html)

### 自动化更新docker容器
自动化更新docker容器shell脚本
###### 判断容器是否运行
第20行
###### 判断容器是否存在
第30行
###### 判断镜像是否存在
第40行
###### 制作镜像
第124行
###### 启动容器
第128行  
```bash
#!/bin/bash

# 镜像名称
imagesName="blockchain-oms"
# 镜像版本
DOCKER_VERSION="test"
# 容器名称
containerName="bcotest"
# 前端项目名称
frontName="blockchain-oms-front"
# 前端项目分支
branchFront="dev"
# 后端项目名称
nodeName="blockchain-oms"
# 后端项目分支
branchNode="dev"

echo -e "\033[32m 判断${containerName}容器是否在运行 \033[0m"

# 判断对应名称的容器是否在运行，是则删除
if [[ -n $(docker ps -q -f "name=^${containerName}$") ]];then
        echo -e "\033[32m container is runing, stop it \033[0m"
        docker stop $containerName
else
        echo -e "\033[32m container not exist \033[0m"
fi

echo -e "\033[32m 判断${containerName}容器是否存在 \033[0m"

# 判断对应名称的容器是否存在，存在则删除
if [[ -n $(docker container ls -a -q -f "name=^${containerName}$") ]];then
        echo -e "\033[32m container is exist, remove it \033[0m"
        docker rm $containerName
else
        echo -e "\033[32m container not exist \033[0m"
fi

echo -e "\033[32m 判断${imagesName}镜像是否存在 \033[0m"

# 判断对应名称的镜像是否存在，存在则删除
if [[ -n $(docker images -q ${imagesName}) ]];then
        echo -e "\033[32m images is exist, remove it \033[0m"
        docker image ls -q ${imagesName}
        docker image rm $(docker image ls -q ${imagesName})
else
        echo -e "\033[32m images not exist \033[0m"
fi

echo -e "\033[32m 进入前端项目根目录，构建项目 \033[0m"

# 进入前端项目根目录，构建项目
cd ./${frontName}

echo -e  "\033[32m --------------------------- \033[0m"

pwd

echo -e "\033[32m git checkout ${branchFront} \033[0m"

git checkout $branchFront

echo -e "\033[32m git pull \033[0m"

git pull

echo -e "\033[32m npm i \033[0m"

npm i

echo -e "\033[32m npm run build \033[0m"

npm run build

echo -e "\033[32m 进入node项目根目录，构建项目 \033[0m"

# 进入node项目根目录，构建项目
cd ../${nodeName}

echo -e  "\033[32m --------------------------- \033[0m"

pwd

echo -e "\033[32m git checkout . \033[0m"

git checkout .

echo -e "\033[32m git checkout ${branchNode} \033[0m"

git checkout $branchNode

echo -e "\033[32m git pull \033[0m"

git pull

echo -e "\033[32m npm i \033[0m"

npm i

echo -e  "\033[32m 返回shell脚本所在目录 \033[0m"

# 进入shell脚本所在目录
cd ../

echo -e  "\033[32m --------------------------- \033[0m"

pwd

echo -e "\033[32m cp ./${frontName}/dist/* ./${nodeName}/public \033[0m"
# 前端静态资源移入node服务
cp ./${frontName}/dist/* ./${nodeName}/public

echo -e "\033[32m mv ./dockerrun.sh ./${nodeName}/dockerrun.sh \033[0m"
# 更新dockerrun.sh
cp ./dockerrun.sh ./${nodeName}/dockerrun.sh

echo -e "\033[32m 进入node项目根目录，构建镜像 \033[0m"

cd $nodeName

echo -e  "\033[32m --------------------------- \033[0m"

pwd

echo -e "\033[32m 正在制作镜像 \033[0m"

docker build --network=host -t ${imagesName}:${DOCKER_VERSION} .

echo -e "\033[32m 启动容器 \033[0m"

docker run -d -p 8080:3000 --name=${containerName} ${imagesName}:${DOCKER_VERSION}

docker ps
```