<template>
    <div class="home-page">
        <h2>博客总览</h2>
        <input type="text" placeholder="搜索" v-model="search">
        <div class="blog-wrapper" v-for="blog in filterBlogs">
            <router-link v-bind:to="'/blog/' + blog.id">
                <span class="title">{{blog.title}}</span>
                <span class="content">{{blog.content | cut}}</span>
            </router-link>
            <span class="items">分类：{{blog.items}}</span>
            <span class="author">作者：{{blog.author}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-page",
        data () {
            return {
                blogs: [],
                search: ""
            }
        },
        created () {
            var that = this;
            var dataBlogAdd = new AV.Query("blog_add");
            dataBlogAdd.find().then(function (data) {
                var len = data.length;
                for (let i = 0; i < len; i++){
                    that.blogs.push(data[i].attributes);
                    that.blogs[i].id = data[i].id;
                }   
            })
        },
        computed: {
            filterBlogs: function () {
                return this.blogs.filter((blog) => {
                    return blog.title.match(this.search);
                })
            }
        },
        filters: {
            cut: function (value) {
                return value.slice(0,100) + "...";
            }
        }
    };
</script>

<style scoped lang="less">
.home-page {
    width: 90%;
    margin: 0 auto;
    h2 {
        padding: 20px;
        margin-top: 0px;
		background:rgb(73, 73, 73);
        color: white;
        border-top: 1px solid white;
    }
    input {
        width: 30%;
        height: 20px;
        padding: 0 10px;
        line-height: 20px;
    }
    .blog-wrapper {
        margin: 20px auto;
		// background: rgb(165, 165, 165);
        a {
            text-decoration: none;
            color: #000;
        }
        span {
            display: block;
            margin: 0 10px;
            line-height: 30px;
        }
        button {
            display: block;
            margin-left: 10px;
        }
        .title {
            font-weight: 600;
            font-family: 'Courier New', Courier, monospace;
        }
        .content {
            line-height: 25px;
            margin: 0 10px;
        }
        .items,.author {
            display: inline-block;
            font-size: 14px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            color: rgb(116, 116, 2)
        };
    }
    
}

</style>
