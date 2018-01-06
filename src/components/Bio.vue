<template>
    <div class="container-fluid">
        <div class="row row-eq-height">
            <h1>About Me</h1>
            <div class="col-xs-12 col-sm-12 col-md-2">

                <img class="profileshot" src="Uhh professional.jpg" alt="">

            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <p class="h3font">Hi, I'm Alex! I am a full-stack web developer, who is eager to learn and expand my skillset. I strive to
                    create innovative, and well-designed projects that are both visually and functionally appealing to the
                    client and user alike. In my freetime, I enjoy playing music.
                </p>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">

            <div id="langs">
                <h4>SKILLS</h4>
                <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt="html5" height="55px" width="55px">
                <img src="http://www.blackbirdsolutions.com.au/sites/default/files/styles/medium/public/blog/css3-logo.png?itok=r8kt8WZA"
                    alt="css" height="55px" width="55px">
                <img src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" height="55px" width="55px">

                <!--<img src="https://www.w3schools.com/angular/pic_angular.jpg" alt="" height="55px" width="55px">-->
                <img src="https://vuejs.org/images/logo.png" alt="" height="55px" width="55px">
                <img src="https://www.echosteg.com/images/blog/standard/nodejs_logo.png" alt="" height="55px" width="55px">
                <img src="https://cdn.codementor.io/assets/tutors/c-sharp-tutors-online.png" alt="" height="55px" width="55px">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png"
                    alt="" height="55px" width="55px;">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Bio',
        data() {
            return {

            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>