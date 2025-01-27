import type { Metric } from '@playbookmedia/metrics';
import type { Metrics } from './interface';

export class NoopMetrics implements Metrics {
  public emit(_metric: Metric): Promise<void> {
    return Promise.resolve();
  }

  public async flush(): Promise<void> { }
}
