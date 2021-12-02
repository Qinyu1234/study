//创建SSH,绑定github账号
    //1.检查是否已经有SSH Key。
        //cd /.ssh
    //2.生成一个新的SSH。
        //ssh-keygen -t rsa -C "947794823@qq.com"
        //一直回车
    //3.添加ssh key到GitHub/GitLab
        //在GitHub/GitLab上找到关于SSH keys->add key
        //把id_rsa.pub公钥的内容复制进去就可以了。
    
    //git config --global credential.helper store(记住用户和密码)

//新建项目后添加关联
	git init
	git add README.md
	git commit -m "first commit"
	git branch -M main
	git remote add origin git@github.com:Qinyu1234/test.git
	git push -u origin main

//使用git
    // 1.初始化git:
        // git init
    // 2.提交暂存区
        //git add .
    //3.提交到本地仓库
        //git commit -m "init"
    //4.提交到远程仓库
        //git push orgins master -u
    //5.克隆
        //git clone git@github.com:Qinyu1234/gshop-click.git
    //6.查看分支
        //git branch
        //git branch -a  远程分支
    //7.切换分支
        //git checkout master
	//8.重命名分支
		//1.重命名本地分支
		//git branch -m oldbranch newbranch
		//2.删除对应的远程分支
		//git push origin :oldbranch
		//3.将本地重命名的分支提交到仓库
		//git push origin newbranch
    //更新内容到本地
    
//多分支操作
    // git checkout -b atguigu 本地创建新分支
    // git checkout -b atguigu origin/atguigu 根据远程分支创建本地分支
    // git chechout aaa 切换分支aaa
    // git push -u origin atguigu

//合并分支
    //git checkout main 切换到合并到的分支
    //git merge branch_qinyu 将xx分支合并到现在的分支上
    //git push origin --delete branch_qinyu(分支) 提交

    冲突:
    方法1
        //git stash save "save message"
            //git stash list  ：查看stash了哪些存储
        //git pull origin master
        //git stash pop
    方法2
        //放弃本地代码,退回上一版本,再拉取代码到本地。
        // git reset --hard
        // git pull origin master