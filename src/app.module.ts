import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";


@Module({
    controllers: [],
    providers: [],
    imports: [TrackModule],
})
export class AppModule {}