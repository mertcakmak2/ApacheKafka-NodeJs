# ApacheKafka-NodeJs
KafkaNodejs with Docker Hub

Docker Zookeeper Install
------------------------------------------------
docker run --name zookeeper -p 2181:2181 zookeeper


Docker Kafka Install
------------------------------------------------
docker run --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=192.168.1.101:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.101:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka
