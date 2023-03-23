<template>
    <div class="mx-auto card bg-base-300 w-3/5 my-8 overscroll-auto p-16">

        <div class="form-control">
            <label class="label">
                <span class="label-text ">课程名称</span>
            </label>
            <input class="input input-bordered bg-base-100" disabled placeholder="You can't touch this" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程方向</span>
            </label>
            <input class="input input-bordered bg-base-300" disabled placeholder="You can't touch this" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">费用</span>
            </label>
            <input class="input input-bordered bg-base-300" disabled placeholder="You can't touch this" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">姓名</span>
            </label>
            <input type="text" placeholder="name" class="input input-bordered " />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">联系方式</span>
            </label>
            <input type="text" placeholder="phone" class="input input-bordered" />
        </div>
        <div class="flex w-full mt-6 justify-between">
            <button class="btn btn-primary w-2/5 " >申请</button>
            <button class="btn  w-2/5" @click="$router.replace('/student')" >取消</button>
        </div>
    </div>
</template>

