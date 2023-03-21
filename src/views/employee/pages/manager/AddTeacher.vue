<template>
    <div class="mx-auto card bg-base-200 w-3/5 my-8 overscroll-auto p-16">
        <div class="form-control">
            <label class="label">
                <span class="label-text">讲师姓名</span>
            </label>
            <input type="text" placeholder="name" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">联系方式</span>
            </label>
            <input type="text" placeholder="phone" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">讲授方向</span>
            </label>
            <input type="text" placeholder="type" class="input input-bordered" />
        </div>
        <div class="flex w-full mt-6 justify-between">
            <button class="btn btn-primary w-1/4">添加讲师</button>
            <button class="btn btn-secondary w-1/4">批量导入讲师</button>
            <button class="btn w-1/4" >取消</button>
        </div>
    </div>
</template>

