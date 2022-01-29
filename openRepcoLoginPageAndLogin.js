const puppeteer = require('puppeteer');

async function simpleTest(){
	console.log('Запуск браузера');
	const browser = await puppeteer.launch({
		headless: false,
		slowMo: 200,
		defaultViewport: null,
		//args: ['--start-fullscreen'],
		args: ['--start-maximized'],
	});

	console.log('Создание новой вкладки в браузере');
	const page = await browser.newPage();

	console.log('Переход по ссылке');
	await page.goto('https://repco.xyz', {
    		waitUntil: 'networkidle2'
	});

	await page.screenshot({path: '/Users/mb/projects/puppeteer/repco.png'}); // снятие скриншота
	//ширина и высота окна
	//меню
	//открыть форму регистрации
	console.log('Закрытие браузера');
	await browser.close();
}

simpleTest();
