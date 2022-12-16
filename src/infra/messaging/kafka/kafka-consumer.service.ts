import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['special-weasel-14782-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'c3BlY2lhbC13ZWFzZWwtMTQ3ODIk2EnWaK7FWD91eCFdtW0RQfn2uPMGU2BvQvM',
                    password: '5fBfMch3kAAWKiWFVaQyggM3jbcpDfc3qydrUFIhT5vbfrtJ-tpnScdMUEeQlq5WfBdL-A==',
                },
                ssl: true,
            }
        });
    }

    async onModuleDestroy() {
        await this.close();
    }
}