FROM ruby:3.0.2

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN mkdir -p /app/tmp/sockets
WORKDIR /app

ADD Gemfile /app/Gemfile
ADD Gemfile.lock /app/Gemfile.lock

ENV DEBIAN_FRONTEND noninteractive
ENV BUNDLER_VERSION 2.2.15

RUN apt-get update -qq && \
    apt-get install -y build-essential \
    libpq-dev \
    sudo \
    && gem env \
    && gem list

RUN bundle install

ADD . /app
