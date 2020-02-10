<template>
  <div class="layout">
    <TheHeader/>
  
  
<header class="header">
</header>
    <slot/>
    <Icons />
  </div>
</template>



<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin     : 0;
  padding    : 0;
  line-height: 1.5;
  
  
}
.layout {
  max-width    : auto;
  margin       : 0 auto;
  padding-left : 2px;
  padding-right: 2px;
  background   : #242943;
  color        : #FFCB31;

}


.header {
  display        : flex;
  justify-content: space-between;
  align-items    : center;
  margin-bottom  : 20px;
  height         : 80px;

}

#showcase{
  background             : url(http://res.cloudinary.com/dzhbfdfa5/image/upload/v1515831480/tower_vow6im.jpg) no-repeat center center fixed;
  background-size        : cover;
  -webkit-background-size: cover;
  -moz-background-size   : cover;
  -o-background-size     : cover;
  height                 : 100%;
  margin-top             : -75px;

}

.nav__link {
  margin-left: 20px;
}

.title-color{
    color: #FFCB31;
}

.main-color{
color: #1A8c97;
}

.con-color{color: #242943;
}

.main-content{
  margin-top: 4.5rem;
}
.labour{
  color: #ef4836;
}
.tory{
  color: #1e90ff;
}
.asian{
  color: #00ff7f;
}

.today{
  color: #FFF5EE;
}
</style>


<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import Icons from '@/components/TheFooter/Icons'



export default {
  components: {
    TheHeader,
    Icons,
  }
}
</script>
