<template>
    <div class="mx-auto card bg-base-300 w-full mb-8 overscroll-auto p-16">
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
                <option disabled selected>前端</option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">需求描述</span>
            </label>

            <input class="input input-bordered " disabled value="description" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">分配讲师</span>
            </label>
               <select class="select select-bordered">
                <option disabled selected>请选择讲师</option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程内容</span>
            </label>
            <textarea type="text" placeholder="main" class="textarea textarea-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程时间（系统会自动在开始前一天通知学员）</span>
            </label>
            <input type="text" placeholder="time" class="input input-bordered" />
        </div>
        <div class="flex w-full mt-6 justify-between">
            <button class="btn btn-primary w-2/5">发布课程</button>
            <button class="btn  w-2/5" >取消</button>
        </div>
    </div>
</template>
