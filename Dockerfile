FROM ubuntu

# global dependencies / build-essentials and cli-tools
RUN \
  apt-get update && \
  apt-get install -y --no-install-recommends apt-utils && \
  apt-get install -y --force-yes build-essential git curl sudo iputils-ping bzip2 && \
  apt-get clean

# install most current node and global node packages
RUN \
  curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash - && \
  sudo apt-get install -y nodejs

# create the working dir
#RUN mkdir /code && \
#  cd /code && \
#  git clone https://stash.odesk.com/scm/mob/eomobile-frontend.git && \
#  cd /code/eomobile-frontend/ && \
#  git fetch && \
#  git checkout -b dev origin/dev && \
#  npm i

# set the working dir
WORKDIR /src

CMD ["npm", "start"]