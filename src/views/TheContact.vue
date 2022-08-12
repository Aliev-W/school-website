<template>
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
</template>

<script>

export default {
name: 'TheContact',
components: {}
}
</script>

<style lang="scss" scoped>
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
</style>
