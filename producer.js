const { Kafka } = require("kafkajs");

const topic_name = process.argv[2] || "Logs2";
const partition = process.argv[3] || 0

createProducer();

async function createProducer() {
    try {
        const kafka = new Kafka({
            clientId: "kafka_ornek_1",
            brokers: ["192.168.1.101:9092"]
        });

        const producer = kafka.producer();
        console.log("Producera bağlanılıyor..");

        await producer.connect();
        console.log("Producera bağlantı başarılı.");

        const message_result = await producer.send({
            topic: topic_name,
            messages: [
                {
                    value: "Bu bir test log mesajıdır...",
                    partition: partition
                }
            ]
        })
        console.log("Gönderim işlemi tamamlandı", JSON.stringify(message_result));

        await producer.disconnect();

    } catch (error) {
        console.log("Bir hata oluştu");
    } finally {
        process.exit(0);
    }
}