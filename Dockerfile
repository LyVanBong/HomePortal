FROM nginx:latest
COPY ./BByteHomePortal /usr/share/nginx/html

#docker build -t bbytegroupcom/website-templates:v2 -f Dockerfile .
# docker tag home:v2 bbytegroupcom/website-templates:v2
# docker push bbytegroupcom/website-templates:v2