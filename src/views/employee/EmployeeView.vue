<template>
    <div class="w-full h-full overflow-hidden">
        <aside class="fixed w-56 h-full">
            <ul class="menu bg-base-200 p-2 h-full">
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
        </aside>
        <main>
            <router-view />
        </main>
    </div>
</template>