<template>
    <div class="flex">
        <ul class="menu bg-base-200 w-56 p-2 sticky left-0 bottom-0 overflow-hidden">
            <li class="menu-title">
                <span>经理</span>
            </li>
            <li><a>管理培训申请</a></li>
            <li><a>查看培训情况</a></li>
            <li class="menu-title">
                <span>执行人</span>
            </li>
            <li><a>管理课程</a></li>
            <li><a>Item 2</a></li>
            <li class="menu-title">
                <span>现场工作人员</span>
            </li>
            <li><a>签到</a></li>

        </ul>
        <router-view/>
    </div>
</template>