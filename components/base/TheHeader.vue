<template>
	<header class="container blog-header lh-1 py-3">
		<div class="row flex-nowrap justify-content-between align-items-center">
			<div class="col-4 pt-1">
				<a class="text-primary text-uppercase" href="#">Subscribe</a>
			</div>
			<div class="col-4 text-center">
				<nuxt-link class="blog-header-logo text-uppercase" to="/">
					TIMES
				</nuxt-link>
			</div>
			<div class="col-4 d-flex gap-2 justify-content-end align-items-center">
				<a class="text-primary" href="#" aria-label="Search">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
						 stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img"
						 viewBox="0 0 24 24"
					>
							<title>Search</title>
						<circle cx="10.5" cy="10.5" r="7.5"/>
						<path d="M21 21l-5.2-5.2"/>
					</svg>
				</a>
				<a class="px-4 btn btm-sm btn-outline-primary text-uppercase" href="#">
					Sign up
				</a>
			</div>
		</div>
	</header>
	<div class="container border-bottom pt-2 pb-1">
    <div class="mb-2">
			<nav class="nav d-flex gap-4">
				<nuxt-link to="/" class="text-primary">
					Home
				</nuxt-link>
				<nuxt-link to="/posts" class="text-primary">
					Posts
				</nuxt-link>
			</nav>
    </div>
	</div>
</template>
