<template>
    <div class="w-full h-full overflow-hidden flex ">
        <aside class="fixed w-56 h-full">
            <ul class="menu bg-base-200 p-2 h-full  rounded-r-lg">
                <li class="menu-title">
                    <span>经理</span>
                </li>
                <li><a href="/employee/manageenroll">管理培训申请</a></li>
                <li><a href="/employee/managetrain">查看培训情况</a></li>
                <li><a href="/employee/managematerial">查看办公资料</a></li>
                <li class="menu-title">
                    <span>执行人</span>
                </li>
                <li><a href="/employee/managecourse">管理课程</a></li>
                <li><a href="/employee/manageteacher">管理讲师</a></li>
                <li class="menu-title">
                    <span>现场工作人员</span>
                </li>
                <li><a href="/employee/manageattendance">签到</a></li>
            </ul>
        </aside>
        <main class='w-full ml-60 mr-4'>
            <router-view />
        </main>
    </div>
</template>