# Задание 1

Дана строка, содержащая скобки трёх видов (круглые, квадратные и фигурные) и любые другие символы. Посчитайте сколько скобок расставлено корректно а сколько нет.
Например, в строке ([]{})[] скобки расставлены корректно, а в строке ([]] — нет. В первом случае правильно расставлено 8 скобок. Во втором случае указаны 2 скобки правильно, и 2 не правильно.

# Задание 2

Вам необходимо сделать функциональными компонентами следующую задачу:

На странице есть список и кнопка добавления в этот список нового элемента.
Каждый элемент списка отображает свой порядковый номер и обратный отсчет в секундах до его автоматического удаления из списка.
Каждый добавленный элемент, должен находится в нем случайное количество секунд от 10 до 30. При исчезновении во всем списке пересчитывается порядковый номер.

Пример: Пользователь нажал на кнопку добавить три раза. В списке появилось три элемента.

1. Исчезнет через 13 секунд
2. Исчезнет через 25 секунд
3. Исчезнет через 15 секунд.

По истечению 13 секунд, из списка будет удален 1 элемент. И он станет вот таким:

1. Исчезнет через 12 секунд
2. Исчезнет через 2 секунды

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
