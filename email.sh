#!/bin/sh

# 修改历史提交的用户名密码
# OLD_EMAIL 老的邮箱
# CORRECT_NAME 新的用户名
# CORRECT_EMAIL 新的邮箱
git filter-branch --env-filter '

OLD_EMAIL="k@t.com"
CORRECT_NAME="zjl-coder"
CORRECT_EMAIL="1301034106@qq.com"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags

# 修改完之后强制推送
git push origin --force --all