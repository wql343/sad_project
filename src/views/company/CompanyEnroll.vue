<template>
    <div class="mx-auto card bg-base-200 w-3/5 my-8 overscroll-auto p-16">

        <div class="form-control">
            <label class="label">
                <span class="label-text">课程类别</span>
            </label>
            <select class="select select-bordered w-full">
                <option disabled selected>选择类别</option>

            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">课程名称</span>
            </label>
            <input type="text" placeholder="name" class="input input-bordered" />
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">详细需求</span>
            </label>
            <textarea class="textarea textarea-bordered" placeholder="description"></textarea>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">学员资料</span>
            </label>
            <input type="file" class="file-input file-input-bordered w-full " />
        </div>
        <div class="flex w-full mt-6 justify-between">
            <button class="btn btn-primary w-2/5 " >申请</button>
            <button class="btn  w-2/5" @click="$router.replace('/company')" >取消</button>
        </div>
    </div>
</template>

