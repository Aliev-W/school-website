<template>
<div class="container">
    <div class="news">
        <div class="hr left"></div> <h1 class="title">Yangiliklar</h1><div class="hr right"></div>
    </div>
        <div class="cards">
            <div class="card">
                <img src="../assets/image-6.png" >
                <p class="sub1">Avtomobillar tuzulishi xonasida o’quv amaliyot dars mashg’uloti </p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida avtomobillar tuzulishidan o’quv amaliyot ...</p>
                <br>
                <div>
                    <div class="data">9-11-2017 | 15:46</div>
                    <a class="btn">Batafsil</a>
                </div>
            </div>
            <div class="card">
                <img src="../assets/image-7.png" alt="">
                <p class="sub1">O‘quvchi qizlarning kasb-hunarga o‘rgatish maqsadida tashkil etilgan to‘garak jarayoni</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchi qizlarning kasb-hunarga ...</p>
                <div>
                    <div class="data">22-02-2018 | 14:36</div>
                    <a class="btn">Batafsil</a>
                </div>
            </div>

            <div class="card">
                <img src="../assets/image-8.png" alt="">
                <p class="sub1">O’quvchilar darsdan so’ng kutubxonadan foydalanib bilimlarini oshirishmoqda</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o’quvchilar darsdan so’ng kutubxonadan ...</p>
                <div>
                    <div class="data">16-5-2014 | 13:29</div>
                    <a class="btn">Batafsil</a>
                </div>
            </div>

            <div class="card">
                <img src="../assets/image-9.png" >
                <p class="sub1">Yo’l xarakat qoidasi to’garak mashguloti</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchilarga yo’l harakati tog’aragi ...</p>
                <div>
                    <div class="data">3-12-2016 | 9:57</div>
                    <a class="btn">Batafsil</a>
                </div>
            </div>

            <div class="card">
                <img src="../assets/image-10.png" alt="">
                <p class="sub1">Payvandlash (elektrogaz payvandlash) kasbiy to’garak mashg’ uloti.</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchilarga payvandlash to’garaklari ...</p>
                <div>
                    <div class="data">28-04-2019 | 13:15</div>
                    <a class="btn">Batafsil</a>
                </div>
            </div>

            <div class="card">
                <img src="../assets/image-11.png" alt="">
                <p class="sub1">Kon ishi asoslari fan to’garaklari olib borilmoqda.</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida kon ishi asoslari fan to’garaklari olib  ...</p>
                <div class="date_btn">
                    <div class="data">20-10-2020 | 10:32</div>
                    <a class="btn">Batafsil</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TheNews'
}
</script>

<style lang="scss" scoped>
.container {
    margin: 60px 0;
}

.title{
    text-align: center;
    font-size: 47px;
    line-height: 20px;
    font-weight: 400;
    color: #111F50;
}

.news{
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
    display: grid;
    width: 90%;
	margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 60px;
	padding: 10px;
}

.cards .card{
    width: 100%;
    // height: 580px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 20px;
}

.cards .card:hover{
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease 0s;
}

.cards .card img{
    border-radius: 20px 20px 0 0;
    width: 100%;
}

.cards .card div{
    display: flex;
}

.cards .card p{
    color: #000;
}

.cards .card .sub1{
    font-size: 19px;
    font-weight: 400;
    margin: 20px 5px 0;
    line-height: 24px;

}

.cards .card .sub2{
    font-size: 15px;
    font-weight: 300;
    margin: 10px 5px 0;
    line-height: 22px;
}

.cards .card div {
    margin: 5px 10px 5px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cards .card div .btn{
    padding: 10px 25px;
    font-weight: 300;
    font-size: 15px;
    border-radius: 0px 15px 0px 13px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);

}

.cards .card div .btn:hover{
    background: rgba(17, 31, 80, 0.8);
    color: #fff;
    border: none;
}

.cards .card div .data{
    width: 160px;
    height: 20px;
    font-weight: 300;
    font-size: 15px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.6);
}
</style>