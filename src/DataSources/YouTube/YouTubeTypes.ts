import { Thing } from '../../schema.org.ts';
import { Publisher } from '../../Publishers/Publisher.ts'
import { BaseDataSourceOptions } from '../../Types/BaseDataSourceOptions.ts'

type YouTubeImage = { url: string, width: number, height: number }

export type YouTubeRawItem = {
  kind: string,
  etag: string,
  snippet: {
    resourceId: { kind: string, videoId?: string, playlistId?: string },
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: YouTubeImage,
      medium: YouTubeImage,
      high: YouTubeImage
    },
    channelTitle: string,
    liveBroadcastContent: string,
    publishTime: string
    defaultAudioLanguage: string,
    defaultLanguage: string
  }
}

export type YouTubeOptions = BaseDataSourceOptions & {
  label: string,
  langCode?: string | ((item: Thing) => string),
  key: string,
  channel: string,
  publisher: Publisher
}
