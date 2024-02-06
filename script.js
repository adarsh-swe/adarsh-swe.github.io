function toggleSection(section) {
	const aboutSection = document.getElementById("about-section");
	const workSection = document.getElementById("work-section");
	const webProjectsSection = document.getElementById("web-projects-section");
	const mobileProjectsSection = document.getElementById(
		"mobile-projects-section"
	);
	const hardwareProjectsSection = document.getElementById(
		"hardware-projects-section"
	);
	const leadershipSection = document.getElementById("leadership-section");

	const aboutButton = document.getElementById("about-button");
	const workButton = document.getElementById("work-button");
	const webProjectsButton = document.getElementById("web-projects-button");
	const mobileProjectsButton = document.getElementById(
		"mobile-projects-button"
	);
	const hardwareProjectsButton = document.getElementById(
		"hardware-projects-button"
	);
	const leadershipButton = document.getElementById("leadership-button");

	// Hide all sections
	aboutSection.style.display = "none";
	workSection.style.display = "none";
	webProjectsSection.style.display = "none";
	mobileProjectsSection.style.display = "none";
	hardwareProjectsSection.style.display = "none";
	leadershipSection.style.display = "none";

	// Remove active class from all buttons
	aboutButton.classList.remove("active");
	workButton.classList.remove("active");
	webProjectsButton.classList.remove("active");
	mobileProjectsButton.classList.remove("active");
	hardwareProjectsButton.classList.remove("active");
	leadershipButton.classList.remove("active");

	// Display the selected section and add active class to the corresponding button
	if (section === "about") {
		aboutSection.style.display = "block";
		aboutButton.classList.add("active");
	} else if (section === "work") {
		workSection.style.display = "block";
		workButton.classList.add("active");
	} else if (section === "web-projects") {
		webProjectsSection.style.display = "block";
		webProjectsButton.classList.add("active");
	} else if (section === "mobile-projects") {
		mobileProjectsSection.style.display = "block";
		mobileProjectsButton.classList.add("active");
	} else if (section === "hardware-projects") {
		hardwareProjectsSection.style.display = "block";
		hardwareProjectsButton.classList.add("active");
	} else if (section === "leadership") {
		leadershipSection.style.display = "block";
		leadershipButton.classList.add("active");
	}
}
