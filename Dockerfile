FROM nginx:latest
COPY ./BByteHomePortal /usr/share/nginx/html

#docker build -t bbytegroup/website-templates:v2 -f Dockerfile .
# docker tag home:v2 bbytegroup/website-templates:v2
# docker push bbytegroup/website-templates:v2
