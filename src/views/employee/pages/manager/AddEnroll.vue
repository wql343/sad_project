<template>
    <div class="mx-auto card bg-base-200 w-3/5 mb-8 overscroll-auto p-16">
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程名称</span>
            </label>

            <input class="input input-bordered" value="course name" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程方向</span>
            </label>
               <select class="select select-bordered">
                <option disabled selected>请选择方向</option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">申请人</span>
            </label>
            <input type="text" placeholder="software company" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">申请时间</span>
            </label>
            <input type="text" placeholder="time" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">执行人</span>
            </label>
            <select class="select select-bordered">
                <option disabled selected>请选择执行人</option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程费用</span>
            </label>
            <input type="text" placeholder="$100" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程描述</span>
            </label>
            <textarea type="text" placeholder="desc" class="textarea textarea-bordered" />
        </div>
        <div class="flex w-full mt-6 justify-between">
            <button class="btn btn-primary w-2/5">添加课程</button>
            <button class="btn  w-2/5" @click="$router.replace('/employee/manageenroll') " >取消</button>
        </div>
    </div>
</template>

