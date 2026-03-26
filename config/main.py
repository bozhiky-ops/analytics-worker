from celery import Celery
from analytics_worker.config import get_config
from analytics_worker.tasks import process_data

def create_celery_app():
    config = get_config()
    celery = Celery('analytics-worker', broker=config['broker_url'])
    celery.conf.result_backend = config['result_backend']
    celery.conf.timezone = config['timezone']
    return celery

def main():
    app = create_celery_app()
    app.conf.beat_schedule = {
        'process-data': {
            'task': 'analytics_worker.tasks.process_data',
            'schedule': 60.0  # run every 1 minute
        }
    }
    app.signature('process_data').delay()

if __name__ == '__main__':
    main()