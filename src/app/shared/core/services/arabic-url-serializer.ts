import { DefaultUrlSerializer, UrlTree } from '@angular/router';

export class ArabicUrlSerializer extends DefaultUrlSerializer {
  override parse(url: string): UrlTree {
    try {
      // decodeURI decodes percent-encoded chars (like Arabic) but keeps / ? # & intact
      return super.parse(decodeURI(url));
    } catch {
      return super.parse(url);
    }
  }
}
