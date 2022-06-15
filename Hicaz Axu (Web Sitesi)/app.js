function toggleMenu(){
	const menuToggle = document.querySelector('.toggle');
	const sidebar = document.querySelector('.sidebar');
	menuToggle.classList.toggle('active');
	sidebar.classList.toggle('active');

}

window.addEventListener('scroll', function(){
	const header = document.querySelector('header');
	header.classList.toggle("sticky", window.scrollY > 0);
});