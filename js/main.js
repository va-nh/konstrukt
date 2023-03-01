const wrapper = document.getElementById('wrapper');

const showMessage = () => {
	alert('Made from John Sakhnenko');
}

wrapper.onclick = showMessage();