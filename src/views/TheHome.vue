<template>
	<header>
		<div class="image">
			<!-- <img src="../assets/background.jpg" alt=""> -->
		</div>
	</header>
	<section class="section__news">
		<div class="container1">
    	<div class="news">
        <div class="hr left"></div>
					<h1 class="title">Yangiliklar</h1>
				<div class="hr right"></div>
    	</div>
			<div class="container2">
				<div class="cards">
					<!-- 1 -->
          <div class="card">
            <img src="../assets/image-6.png" >
            <p class="sub1">Avtomobillar tuzulishi xonasida o’quv amaliyot dars mashg’uloti </p>
            <p class="sub2">Denov tuman 4-son kasb-hunar maktabida avtomobillar tuzulishidan o’quv amaliyot ...</p>
            <br>
            <div>
              <div class="data">16-03-2022 | 18:23</div>
              <a class="btn">Batafsil</a>
        		</div>
        	</div>
					<!-- 2 -->
          <div class="card">
            <img src="../assets/image-7.png" alt="">
            <p class="sub1">O‘quvchi qizlarning kasb-hunarga o‘rgatish maqsadida tashkil etilgan to‘garak jarayoni</p>
            <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchi qizlarning kasb-hunarga ...</p>
            <div>
              <div class="data">16-03-2022 | 18:23</div>
                <a class="btn">Batafsil</a>
              </div>
            </div>
					<!-- 3 -->
          <div class="card">
            <img src="../assets/image-8.png" alt="">
            <p class="sub1">O’quvchilar darsdan so’ng kutubxonadan foydalanib bilimlarini oshirishmoqda</p>
            <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o’quvchilar darsdan so’ng kutubxonadan ...</p>
            <div>
              <div class="data">16-03-2022 | 18:23</div>
              <a class="btn">Batafsil</a>
            </div>
          </div>
        </div>
			</div>
			<div class="more">
				<router-link class="btn" to="/news">Barchasi</router-link>
			</div>
    </div>
	</section>
	<section class="section__result">
		<div class="container">
			<div class="left">
				<img src="../assets/users.png" alt="">
				<h3 class="title">515</h3>
				<p class="subtitle">O'quvchilar</p>
			</div>
			<div class="center">
				<img src="../assets/Students.png" alt="">
				<h3 class="title">222</h3>
				<p class="subtitle">Bitiruvchilar</p>
			</div>
			<div class="right">
				<img src="../assets/Cup.png" alt="">
				<h3 class="title">76</h3>
				<p class="subtitle">O'qituvchilar</p>
			</div>
		</div>
	</section>
	<section class="section__teacher">
		<div class="container">
        <div class="teacher">
					<div class="hr"></div>
						<h1 class="title">O'qituvchilar</h1>
					<div class="hr"></div>
				</div>
        <div class="cards">
			<!-- 1 -->
            <div class="card">
                <img src="../assets/image-13.png" alt="">
                <p class="title">Axrorov Baxtiyor</p>
                <p class="subtitle">Maktab direktori</p>
            </div>
			<!-- 2 -->
            <div class="card">
                <img src="../assets/image-4.png" alt="">
                <p class="title">Sultonov Yashnar</p>
                <p class="subtitle">Ma'naviy va marifat ishlari bo'yicha direktor o'rinbosari </p>
            </div>
			<!-- 3 -->
			<div class="card">
                <img src="../assets/Zokir.jpg" alt="">
                <p class="title">Rahmonov Zokir</p>
                <p class="subtitle">O'quv ishlari bo'yicha direktor o'rinbosari</p>
            </div>
			<!-- 4 -->
            <div class="card">
                <img src="../assets/image-14.png" alt="">
                <p class="title">Narzulloyev Sharof</p>
                <p class="subtitle">Maxsus fan o’qituvchisi</p>
            </div>
        </div>
		<div class="more">
				<router-link class="btn" to="/teacher">Barchasi</router-link>
		</div>
    </div>
	</section>
	<section class="section__contact">
		<div class="section-first">
		<div class="container">
			<div class="line"></div>
			<div class="text">Bog'lanish</div>
			<div class="line"></div>
		</div>
	</div>
	<div class="section-second">
		<div class="container">
			<div class="map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3128.1647879080115!2d67.91223590683204!3d38.36830916491045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x19141faf6c47bd6c!2zMzjCsDIyJzA2LjUiTiA2N8KwNTQnNDAuMiJF!5e0!3m2!1sru!2s!4v1649502249041!5m2!1sru!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
			<div class="adress">
				<div class="title">Biz bilan bog'lanish</div>
				<div class="c-location">
					<div class="loc"></div>
					<div class="text">Surxondaryo viloyati, Denov tumani, Tortuvli QFY, Chambil mahallasi, Qumqishloq ko'chasi, 1-uy</div>
				</div>
				<div class="c-mail">
					<div class="mail"></div>
					<div class="text">absalom@umail.uz</div>
				</div>
				<div class="c-phone">
					<div class="phone"></div>
					<div class="text">+ (998 97) 244-80-14</div>
				</div>
				<div class="c-web">
					<div class="web"></div>
					<div class="text">denovkasbhunar4.uz</div>
				</div>
			</div>
		</div>
	</div>
	</section>
</template>

<script>

export default {
  name: 'TheHome',
  components: {}
}
</script>

<style lang="scss" scoped>
	header {
		width: 100%;

		.image {
			width: 100%;
			height: 90vh;
			background: url(../assets/background-up.jpg) center / cover no-repeat;
		}
	}

	.section__news {
		.container1 {
			display: flex;
			flex-direction: column;
			justify-content: center;
			// align-items: center;

			.news {
    			margin: 60px 0;
    			display: flex;
    			justify-content: center;
    			align-items: center;

				.title {
    				text-align: center;
    				font-size: 47px;
    				line-height: 20px;
    				font-weight: 400;
    				color: #111F50;
				}

				.hr {
    				width: 550px;
    				height: 4px;
    				margin: 0 80px;
    				background:  #111F50;
				}
			}

			.more {
				margin: 20px 0;
				display: flex;
				justify-content: center;
				.btn {
					text-decoration: none;
    				padding: 10px 25px;
    				font-weight: 300;
    				font-size: 15px;
			    	border-radius: 15px;
    				border: 1px solid rgba(0, 0, 0, 0.4);
    				cursor: pointer;
    				color: rgba(0, 0, 0, 0.6);
					&:hover{
    					border: 1px solid rgba(17, 31, 80, 0.8);
    					background: rgba(17, 31, 80, 0.8);
    					color: #fff;
					}
				}
			}
			
		}

		.container2 {
			// display: flex;
			// justify-content: center;
			max-width: 100%;
			// min-width: 320px;
			margin: 0 auto;
			@media (max-width: 1200px) {
				margin: 0;
			}

			.cards {
				max-width: 1200px;
				// margin: 0 auto;
    		display: grid;
    		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    		grid-gap: 60px;
				padding: 10px;
				// padding-left: 20px;

				// @media (max-width:1200px) {
    			// 	grid-template-columns:  repeat(auto-fit, minmax(200px, 1fr));
    			// 	text-align: center;
    			// 	justify-content: center;
    			// 	gap: 10px;
    			// }

				.card {
    				width: 100%;
    				border: 1px solid rgba(0, 0, 0, 0.3);
    				border-radius: 20px;
					// position: relative;
					&:hover {
    					box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
    					transition: all 0.2s ease 0s;
					}
					img {
    					border-radius: 20px 20px 0 0;
    					width: 100%;
					}
					div {
    					margin: 5px 10px 5px;
    					height: 60px;
    					display: flex;
    					justify-content: space-between;
    					align-items: center;
						.btn {
    						padding: 10px 25px;
    						font-weight: 300;
    						font-size: 15px;
    						border-radius: 0px 15px 0px 13px;
    						border: 1px solid rgba(0, 0, 0, 0.4);
    						cursor: pointer;
    						color: rgba(0, 0, 0, 0.6);
							&:hover{
    							background: rgba(17, 31, 80, 0.8);
    							color: #fff;
    							border: none;
							}
						}
						.data{
    						width: 160px;
    						height: 20px;
    						font-weight: 300;
    						font-size: 15px;
    						line-height: 24px;
    						color: rgba(0, 0, 0, 0.6);
						}
					}
					p {
    					color: #000;
					}
					.sub1 {
    					font-size: 19px;
    					font-weight: 400;
    					margin: 20px 5px 0;
    					line-height: 24px;
					}
					.sub2 {
    					font-size: 15px;
    					font-weight: 300;
    					margin: 10px 5px 0;
    					line-height: 22px;
					}
				}
			}
		}
	}
		.section-first {
		width: 100%;
		margin: 60px 0;

		.container {
			max-width: 1510px;
			display: flex;
			align-items: center;
			margin: auto;
			justify-content: space-between;
			padding: 0 15px;
			box-sizing: content-box;

			.line {
				width: 550px;
				background: #111F50;
				height: 4px;
			}

			.text {
				font-weight: 400;
				font-size: 40px;
				color: #111F50;
				margin: 0 30px;
			}
		}
	}

	.section-second {
		margin-bottom: 70px;

		.container {
			max-width: 1200px;
			// display: flex;
			// justify-content: space-between;
			margin: auto;
			padding: 0 10px;

			display: grid;
    	grid-template-columns: minmax(320px, 2fr) 1fr;
			grid-template-rows: 500px;
			grid-gap: 60px;

			@media (max-width: 1200px) {
				// margin: 0;
				grid-template-columns: minmax(80px, 1fr) 2fr 1fr;
				grid-template-rows: 500px 500px;
				grid-gap: 20px;
			}

			.map {
				width: 100%;
				// height: 500px;
				border: 1px solid #111F50;
				
				@media (max-width: 1200px) {
					grid-column-start: 1;
					grid-column-end: 4;
				}
			}

			.adress {
				width: 100%;
				// height: 500px;
				border: 1px solid #111F50;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				@media (max-width: 1200px) {
					grid-column-start: 2;
					grid-column-end: 3;
				}
				@media (max-width: 620px) {
					grid-column-start: 1;
					grid-column-end: 4;
				}

				.title {
					display: flex;
					align-self: center;
					color: #111F50;
					font-weight: 400;
					font-size: 28px;
				}

				.c-location {
					display: flex;
					align-items: center;

					.loc {
						width: 32px;
						height: 45px;
						margin: 0 45px 0 30px;
						background: url(../assets/location.svg) center / cover no-repeat;
					}

					.text {
						width: 300px;
					}
				}

				.c-mail {
					display: flex;
					align-items: center;

					.mail {
						width: 45px;
						height: 36px;
						margin: 0 32px 0 30px;
						background: url(../assets/mail.svg) center / cover no-repeat;
					}
				}

				.c-phone {
					display: flex;
					align-items: center;

					.phone {
						width: 40px;
						height: 40px;
						margin: 0 37px 0 30px;
						background: url(../assets/c-phone.svg) center / cover no-repeat;
					}
				}

				.c-web {
					display: flex;
					align-items: center;

					.web {
						width: 45px;
						height: 45px;
						margin: 0 32px 0 30px;
						background: url(../assets/web.svg) center / cover no-repeat;
					}
				}
			}
		}
	}
	// section teacher 
	.section__teacher {
		.container {
			.teacher {
    			margin: 70px 0;
    			display: flex;
    			justify-content: center;
    			align-items: center;	
				.hr {
					width: 550px;
    				height: 4px;
    				margin: 0 80px;
    				background:  #111F50;
				}
				.title {
					text-align: center;
    				font-size: 47px;
    				line-height: 20px;
    				font-weight: 400;
    				color: #111F50;
				}
			}
			.cards {
				margin-bottom: 50px;
    		max-width: 1200px;
				margin: 0 auto;
    		display: grid;
    		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    		grid-gap: 50px;
				padding: 10px;
				.card {
    				width: 100%;
    				border: 1px solid rgba(0, 0, 0, 0.3);
    				border-radius: 20px 20px 0 0;
    				text-align: center;
    				color: rgba(0, 0, 0, 0.8);
					&:hover {
    					box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
    					transition: all 0.2s ease 0s;
					}
					img {
						width: 100%;
    					border-radius: 20px 20px 0 0;
					}
					.title {
    					font-weight: 700;
    					font-size: 28px;
    					line-height: 24px;
    					margin-top: 30px;
					}
					.subtitle {
    					font-weight: 400;
    					font-size: 19px;
    					line-height: 24px;
    					margin-top: 10px;
					}
				}
			}
			.more {
				margin: 20px 0;
				display: flex;
				justify-content: center;
				.btn {
					text-decoration: none;
    				padding: 10px 25px;
    				font-weight: 300;
    				font-size: 15px;
			    	border-radius: 15px;
    				border: 1px solid rgba(0, 0, 0, 0.4);
    				cursor: pointer;
    				color: rgba(0, 0, 0, 0.6);
					&:hover{
    					border: 1px solid rgba(17, 31, 80, 0.8);
    					background: rgba(17, 31, 80, 0.8);
    					color: #fff;
					}
				}
			}
		}
	}
	.section__result {
		display: flex;
		justify-content: center;
		align-items: center;
		// flex-direction: column;
		height: 400px;
		background: url(../assets/image-21.png) no-repeat center/cover;
		filter: grayscale(40%);

		@media (max-width: 776px) {
			height: 300px;
		}

		@media (max-width: 576px) {
			height: 200px;
		}

		.container {
			display: flex;
			justify-content: space-between;
			color: #fff;
			width: 1200px;

			.title {
				padding: 10px 0;
				font-size: 47px;

				@media (max-width: 776px) {
					font-size: 20px;
				}

				@media (max-width: 576px) {
					font-size: 16px;
				}
			}

			.subtitle {
				font-size: 29px;

				@media (max-width: 776px) {
					font-size: 14px;
				}

				@media (max-width: 576px) {
					font-size: 10px;
				}
			}

			.left {
				display: flex;
				flex-direction: column;
				align-items: center;

				img {
					width: 100%;	
				}
			}

			.center {
				display: flex;
				flex-direction: column;
				align-items: center;

				img {
					width: 80%;	
				}
			}

			.right {
				display: flex;
				flex-direction: column;
				align-items: center;

				img {
					width: 90%;	
				}
			}

			.left img,
			.right img,
			.center img {
				@media (max-width: 1920px) {
					width: 40%;
				}

				@media (max-width: 576px) {
					width: 40%;
				}
			}
		}
	}
</style>
