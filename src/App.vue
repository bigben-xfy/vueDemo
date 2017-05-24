
<template>
    <transition name="router-fade" mode="out-in">
    <div>
        <my-header></my-header>
        <div class="main-container">
            <div class="sidebar-container">
                <sidebar></sidebar>
            </div>
            <div class="content-container">
                <div class="content-body">
                    <transition name="router-fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>

    </div>
    </transition>
</template>

<script>
    import myHeader from './components/header'
    import sidebar from './components/sidebar'
    export default {
    	created() {
		    let loading = this.$loading({
			    body: true,
			    lock: true
		    })
    		setTimeout(() => {
			    loading.close()
            }, 1500)

        },
    	components: {
		    myHeader,
		    sidebar
        }
    }
</script>

<style lang="scss">
    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }

    .sidebar-container{
        width: 240px;
        position: absolute;
        bottom: 0;
        top: 60px;
    }

    .sidebar-container .el-menu{
        min-height: 100%;
    }

    .content-container{
        position: absolute;
        right: 0;
        top: 60px;
        left: 240px;
        bottom: 0;
        overflow-y: scroll;
    }
</style>











