FROM nginx:stable-alpine

# Копируем наше скомпилированное Vue-приложение
COPY /dist /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]