const { Kafka } = require("kafkajs");

createTopic();

async function createTopic() {
    try {
        const kafka = new Kafka({
            clientId: "kafka_ornek_1",
            brokers: ["192.168.1.101:9092"]
        });

        const admin = kafka.admin();
        console.log("Kafka brokera bağlanılıyor..");

        await admin.connect();
        console.log("Kafka brokera bağlantı başarılı topic üretilecek");

        await admin.createTopics({
            topics: [
                {
                    topic: "Logs",
                    numPartitions: 1,
                },
                {
                    topic: "Logs2",
                    numPartitions: 2
                }
            ]
        })
        console.log("Topic başarılı şekilde oluşturuldu");

        await admin.disconnect();
    } catch (error) {
        console.log("Bir hata oluştu");
    } finally{
        process.exit(0);
    }
}