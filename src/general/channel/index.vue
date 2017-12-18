<template>
    <div>channel</div>
</template>

<script>
    import { apiHandler } from '@/api/index'
    export default {
      data () {
        return {
          channellist: {}
        }
      },
      created () {
        // let self = this
        apiHandler({
          name: 'recommend',
          params: {
            disstid: this.$route.params.id
          }
        }, (response) => {
          console.log(response.data)
        //   self.channellist = response.data.topList
        })
      }
    }
</script>
