# MENU_MAKER

Установить, если необходимо dotnet
Инструкция по ссылке: https://learn.microsoft.com/ru-ru/dotnet/core/install/windows?tabs=net70
----------------------------------
Запуск приложения:
1. Просмотр кода страниц RazorPage - открывать через Visual Studio MyWebApp.sln (желательно v.22)
	1.1. Структура проекта:
		1.1.1. wwwroot - содержит вспомогательные файлы, такие как css, js и веб-библиотеки
		1.1.2. Pages - содержит RazorPage - страницы, в которых находится HTML - код страниц формата cshtml
2. Запуск сгенерированной страницы через консоль:
	2.1. Запуск cmd
	2.2. Перейти в директорию, где находится непосредственно сам проект
	2.3. Ввести команду "dotnet run" - запускает локальный сервер, где отображается страница
