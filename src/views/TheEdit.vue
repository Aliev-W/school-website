<template>
	<div class="table">
		<div class="column-add">
			<div class="add">Add news</div>
		</div>
		<div class="name">
			<div class="id">ID</div>
			<div class="title">Title</div>
			<div class="subtitle">Text</div>
			<div class="upload">Upload</div>
			<div class="action">Action</div>
		</div>
		<div class="table-list">
			<!-- 1 -->
			<div>
				<div>1</div>
				<div>Avtomobillar tuzulishi xonasida o’quv amaliyot dars mashg’uloti</div>
				<div>Denov tuman 4-son kasb-hunar maktabida avtomobillar tuzulishidan o’quv amaliyot ...</div>
				<div>

				</div>
				<div>
					<div class="edit">edit</div>
					<div class="delete">delete
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="black" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  						<path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
						</svg>
					</div>
				</div>
			</div>
			<!-- 2 -->
			<div>
				<div>2</div>
				<div>O‘quvchi qizlarning kasb-hunarga o‘rgatish maqsadida tashkil etilgan to‘garak jarayoni</div>
				<div>Denov tuman 4-son kasb-hunar maktabida o‘quvchi qizlarning kasb-hunarga ...</div>
				<div>zx</div>
				<div>
					<div class="edit">edit</div>
					<div class="delete">delete</div>
				</div>
			</div>
			<!-- 3 -->
			<div>
				<div>3</div>
				<div>O’quvchilar darsdan so’ng kutubxonadan foydalanib bilimlarini oshirishmoqda</div>
				<div>Denov tuman 4-son kasb-hunar maktabida o’quvchilar darsdan so’ng kutubxonadan ...</div>
				<div></div>
				<div>
					<div class="edit">edit</div>
					<div class="delete">delete</div>
				</div>
			</div>
			<!-- 4 -->
			<div>
				<div>4</div>
				<div>Yo’l xarakat qoidasi to’garak mashguloti</div>
				<div>Denov tuman 4-son kasb-hunar maktabida o‘quvchilarga yo’l harakati tog’aragi ...</div>
				<div></div>
				<div>
					<div class="edit">edit</div>
					<div class="delete">delete</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TheEdit',
}
</script>

<style lang="scss" scoped>

* {
	// border: 1px solid red;
}

.table {
	padding: 70px 10px;
	margin: auto;
	max-width: 650px;

	.column-add {
		height: 80px;
		display: flex;
		align-items: center;

		.add {
			// width: 100px;
			// height: 40px;
			background: #0077b6;
			color: #fff;
			border-radius: 5px;
			padding: 10px 20px;
			// font-size: 16px;

			&:hover {
				background: #0096c7;
				cursor: pointer;
				transition: 0.4s all ease-in-out;
			}

			&:active {
				background: #0077b6;
				transition: 0s;
				box-shadow: 0px 0px 25px 0px #8ecae6;
			}
		}

	}

	.edit, 
	.delete {
		display: flex;
		align-items: center;
		padding: 0px 10px;
		border-radius: 5px;
		color: white;
		font-size: 14px;

		@media (max-width: 500px) {
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
		}
	}

	.edit {
		background: #2a9d8f;
	}

	.delete {
		background: #e63946;
	}
	
	.name {
		display: flex;

		& > div {
			width: 150px;
			padding: 0.5rem;
			font-weight: 700;
		}

		& > div:nth-child(1) {
			text-align: center;
			width: 60px;
		}

		& > div:nth-child(4),
		& > div:nth-child(5) {
			text-align: center;
		}
	}

	.table-list{
		

		& > div {
			display: flex;

			& > div {
				width: 150px;
				height: 3rem;
				line-height: 2rem;
				padding: 0.5rem;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}

			& > div:nth-child(1){
				font-weight: 700;
				width: 60px;
				text-align: center;
			}

			& > div:nth-child(4),
			& > div:nth-child(5) {
				text-align: center;
				display: flex;
				justify-content: space-evenly;
			}
		}

		& > div:nth-child(odd){
			background: rgb(69, 123, 157, 0.35);
		}
	}
}

</style>