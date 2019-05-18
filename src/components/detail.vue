<template>
    <div class="detail">
        <h2>{{blog.title}}</h2>
        <hr/>
        <span>{{blog.author}}</span>
        <span> {{blog.createdAt.getFullYear() + "-" + (blog.createdAt.getMonth() + 1) + "-" + (blog.createdAt.getDate() - 1)}} </span>
        <article>{{blog.content}}</article>
    </div>
</template>

<script>
    export default {
        name: "detail",
        data () {
            return {
                id: this.$route.params.id,
                blog: {}
            }
        },
        created () {
            let that = this;
            var dataBlogAdd = new AV.Query("blog_add");
            dataBlogAdd.get(this.id).then(function (data) {
                that.blog = data.attributes;
                that.blog.createdAt = data.createdAt;
            })
        },
        methods: {
            del: function () {
                let that = this;
                var dataBlogAdd = AV.Object.createWithoutData('blog_add', that.id);
                dataBlogAdd.destroy().then(function () {
                    location.href = "/"
                })
            }
        }
        
    };
</script>

<style scoped lang="less">
    .detail {
        width: 90%;
        margin: 0 auto;
        span {
            font-size: 12px;
            color: green;
        }
        article {
            margin-top: 20px;
            font-size: 20xpx;
        }
        button {
            margin-top: 10px;
        }
    }
</style>
