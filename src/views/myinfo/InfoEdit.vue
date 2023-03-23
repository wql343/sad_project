<template>
    <div class="mx-auto card bg-base-300 w-3/5 mb-8 overscroll-auto p-16">
        <div class="form-control">
            <label class="label">
                <span class="label-text">姓名</span>
            </label>

            <input class="input input-bordered" placeholder="name" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">性别</span>
            </label>
            <select class="select select-bordered">
                <option selected>男</option>
                <option>女</option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">公司名称</span>
            </label>
            <input type="text" placeholder="companyname" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">工作岗位</span>
            </label>
            <input type="text" placeholder="position" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">技术水平</span>
            </label>
            <input type="text" placeholder="agree" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">邮箱</span>
            </label>
            <input type="text" placeholder="e-mail" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">电话号码</span>
            </label>
            <input type="text" placeholder="phone" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">备注</span>
            </label>
            <input type="text" placeholder="remark" class="input input-bordered" />
        </div>
        <div class="flex w-full mt-6 justify-between">
            <button class="btn btn-primary w-2/5" @click="$router.replace('/myinfo')">
                确认
            </button>
            <button class="btn  w-2/5" @click="$router.replace('/myinfo')">取消</button>
        </div>
    </div>
</template>
