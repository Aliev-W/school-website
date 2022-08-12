<template>
  <div class="container">
        <img src="../assets/image-15.png" alt="">
        <div class="teacher"><div class="hr"></div><h1 class="title">O'qituvchilar</h1><div class="hr"></div></div>

        <div class="cards">
            <div class="card">
                <img src="../assets/image-13.png" alt="">
                <p class="title">Axrorov Baxtiyor</p>
                <p class="subtitle">Maktab direktori</p>
            </div>

            <div class="card">
                <img src="../assets/image-4.png" alt="">
                <p class="title">Sultonov Yashnar</p>
                <p class="subtitle">Ma'naviy va marifat ishlari bo'yicha direktor o'rinbosari </p>
            </div>

            <div class="card">
                <img src="../assets/image-2.png" alt="">
                <p class="title">Azimova Shohida</p>
                <p class="subtitle">Ingliz tili fan o’qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/image-14.png" alt="">
                <p class="title">Narzulloyev Sharof</p>
                <p class="subtitle">Maxsus fan o’qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/Zokir.jpg" alt="">
                <p class="title">Rahmonov Zokir</p>
                <p class="subtitle">O'quv ishlari bo'yicha direktor o'rinbosari</p>
            </div>

            <div class="card">
                <img src="../assets/image-3.png" alt="">
                <p class="title">To’raxonov Abdusalom</p>
                <p class="subtitle">Yordamchi hisobchi</p>
            </div>

						<div class="card">
                <img src="../assets/Lolayev-up.jpg" alt="">
                <p class="title">Lolayev Sirojiddin</p>
                <p class="subtitle">Maxsus fan o'qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/image-5.png" alt="">
                <p class="title">Juraqulov Nodirbek</p>
                <p class="subtitle">Rus tili fan o’qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/image-16.png" alt="">
                <p class="title">Mardonova Vazira</p>
                <p class="subtitle">fan o’qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/Xusnora-up.jpg" alt="">
                <p class="title">Muxammadiyeva Xusnora</p>
                <p class="subtitle">Matematika fan  o'qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/Davron.jpg" alt="">
                <p class="title">Abduhalimov Davron</p>
                <p class="subtitle">fan o’qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/image-19.png" alt="">
                <p class="title">Xusanov Ulug`bek</p>
                <p class="subtitle">fan o’qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/Dilbar.jpg" alt="">
                <p class="title">Mingqobilova Dilbar</p>
                <p class="subtitle">tikuvchilik ICHTU</p>
            </div>

            <div class="card">
                <img src="../assets/image-18.png" alt="">
                <p class="title">Ergashova Zaytuna</p>
                <p class="subtitle">fan o’qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/image-17.png" alt="">
                <p class="title">Yuldoshov Adiljon</p>
                <p class="subtitle">fan o’qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/Iroda.jpg" alt="">
                <p class="title">Boboyeva Iroda</p>
                <p class="subtitle">tikuvchilik ICHTU</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TheTeacher',
  components: {}
}
</script>

<style scoped lang="scss">
.container img{
    width: 100%;
}

.title{
    text-align: center;
    font-size: 47px;
    line-height: 20px;
    font-weight: 400;
    color: #111F50;
}

.teacher{
    margin: 70px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hr{
    width: 550px;
    height: 4px;
    margin: 0 80px;
    background:  #111F50;
}

.cards{
    max-width: 90%;
		margin: 0 auto;
		margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 50px;
	// padding: 10px;
}

.cards .card{
    width: 100%;
    // height: 410px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 20px 20px 0 0;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
    &:hover {
    	box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
    	transition: all 0.2s ease 0s;
	}
}

.cards .card img{
    border-radius: 20px 20px 0 0;
}

.cards .card .title{
    font-weight: 700;
    font-size: 28px;
    line-height: 24px;
    margin-top: 30px;
}

.cards .card .subtitle{
    font-weight: 400;
    font-size: 19px;
    line-height: 24px;
    margin-top: 10px;
}
</style>
