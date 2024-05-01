# React + TypeScript + Vite + SCSS + ESLint + Prettier + Axios + Bootstrap

# Цель задания:
Разработать приложение для демонстрации данных, полученных из API сервиса.

API: https://restcountries.com/

Задачи:
В приложении должен быть отображен список стран и по клику на страну должна открываться страница с подробностями о стране.

Пример информации о стране:
https://restcountries.com/v3.1/name/deutschland

Также минимально требуется стилизовать с помощью Bootstrap или любой другой библиотеки.

При отображении страны данные для вывода для примера, но можно не ограничиваться:
– Name
– Capital
– Flag

Добавить обработку случая, когда API не возвращает данные или возвращает ошибку.

## Стек технологий

### Frontend

- [React](https://reactjs.org/) - Библиотека для создания пользовательских интерфейсов.
- [Vite](https://vitejs.dev/) - Быстрый инструмент сборки для разработки веб-приложений.
- [React Router](https://reactrouter.com/) - Навигация в приложении React
- [Axios](https://axios-http.com/) - Библиотека для выполнения HTTP-запросов из браузера или Node.js.
- [Bootstrap](https://getbootstrap.com/) - это открытый и бесплатный HTML-, CSS- и JS-фреймворк.

### Инструменты

- [TypeScript](https://www.typescriptlang.org/) - статическая типизация для JavaScript
- [ESLint](https://eslint.org/) - Инструмент статического анализа кода для обнаружения ошибок.
- [Prettier](https://prettier.io/) - Инструмент для форматирования кода
- [Sass](https://sass-lang.com/) - Препроцессор CSS

### Дополнительные инструменты

- [@vitejs/plugin-react](https://github.com/vitejs/vite/tree/main/packages/plugin-react) - плагин для работы с React в Vite
- [vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr) - плагин для работы с SVG в Vite

Этот стек технологий позволяет создавать современные веб-приложения на базе React с использованием TypeScript, быстрой сборки через Vite.

## Разработка

### Запуск проекта

Для запуска проекта выполните:
`npm run dev`

## Скрипты

`npm run `

- `dev`/`start` - Запуск сервера разработки и открытие браузера
- `build` - Сборка для продакшена
- `preview` - Локальный просмотр собранного проекта
- `lint` - Проверка кода на соответствие стандартам с помощью ESLint.
- `lint:fix` - Автоматическое исправление ошибок в коде с помощью ESLint.
- `format` - Форматирование кода с помощью Prettier.
- `type-check` - Проверка типов с помощью TypeScript без генерации файлов выходного кода.
