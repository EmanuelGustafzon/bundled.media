import { BaseRoute } from './BaseRoute.ts'
import { dataSources as createDataSources } from '../../.env.ts'

export class TypesRoute extends BaseRoute {

  static path = '/types'

  static description = `A list of all the types from the enabled sources`

  async handle () {
    const sources = await createDataSources()
    const types: { [key: string]: {
      label: string,
      uri: string
      sources: Array<URL>
    } } = {}

    for (const source of sources) {
      for (const type of source.types()) {
        if (!types[type]) {
          types[type] = {
            label: type.split('/').pop()!,
            uri: type,
            sources: [source.url]
          }  
        }
        else {
          types[type].sources.push(source.url)
        }
      }  
    }

    return types
  }

  /**
   * The template for the HyperMedia response
   */
  async template (_variables: { [key: string]: any }): Promise<string> { 
    const types = await this.handle()

    return `
      <ul class="list-group">
      ${Object.entries(types).map(([type, { label, sources }]) => `
        <li class="list-group-item">
          <strong>${label}</strong><br>
          <small>${type}</small>
          <ul>
            ${sources.map(source => `
            <li><a href="${source}">${source}</a></li>
            `).join('')}
          </ul>
        </li>
      `).join('')}
      </ul>
    `
  }
}