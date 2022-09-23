# React

- Функциональные компоненты с хуками в приоритете над классовыми
- Есть четкое разделение на умные и глупые компоненты
- Есть рендеринг списков [FavouritesPage](./src/pages/FavouritesPage.tsx), [History](./src/pages/History.tsx), [HomePage](./src/pages/HomePage.tsx)
- Реализована хотя бы одна форма [SignIn](./src/pages/SignIn.tsx), [SignUp](./src/pages/SignUp.tsx), [HomePage](./src/pages/HomePage.tsx)
- Есть применение Context API [AuthContext](./src/components/AuthContext.tsx)
- Есть применение предохранителя [ErrorBoundary](./src/components/ErrorBoundary.tsx)
- Есть хотя бы один кастомный хук [useDebounce](./src/hooks/debounce.ts)
- Хотя бы несколько компонентов используют PropTypes [FavouriteCard](./src/components/FavouriteCard.tsx), [FilmDescription](./src/components/FilmDescription.tsx)
- Поиск не должен триггерить много запросов к серверу

# Redux

- Используем Modern Redux with Redux Toolkit [reducers](./src/store/films/films.slice.ts)
- Используем слайсы [filmsSlice](./src/store/films/films.slice.ts)
- Есть хотя бы одна кастомная мидлвара [localStorageMiddleware](./src/utils/localStorageMiddleware.tsx)
- Используется RTK Query [filmsApi](./src/store/films/films.api.ts)
- Используется Transforming Responses [filmsApi](./src/store/films/films.api.ts)

#2 уровень

- Использование TypeScript