<template>
    <div class="container-fluid">
        <div>
            <h1 class="about">About Me</h1>




            <div class="row">
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">

                    <img class="profile-shot" src="https://avatars0.githubusercontent.com/u/27745472?s=460&v=4" alt="">
                </div>


                <center>
                    <div class="col-xs-12 col-sm-4 col-md-4">
                        <div class="panel">
                            <p class="bio-text">Hi, I'm Alex! I am a full-stack web developer, who is eager to learn and expand my skillset.
                                I strive to create innovative, and well-designed projects that are both visually and functionally
                                appealing to the client and user alike. In my freetime, I enjoy playing music.
                            </p>

                        </div>
                    </div>
                </center>
                <div class="col-sm-4 col-md-4">

                </div>
            </div>

        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">

            <div id="langs">
                <h4 class="about">SKILLS</h4>
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
    .about {
        color: white;
        font-size: 20px;
    }

    .panel {
        margin-top: 10px;
        background-color: rgba(12, 18, 37, 0.55);
        width: 80%;
    }

    .bio-text {
        color: white;
        font-size: 20px;
        margin-top: 15px;
    }

    .profile-shot {
        width: 60%;
        height: 60%;
        border-style: solid;
        border-width: 10px;
    }
</style>