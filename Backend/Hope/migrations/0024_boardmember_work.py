# Generated by Django 5.1.2 on 2025-02-05 18:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Hope', '0023_boardmember'),
    ]

    operations = [
        migrations.AddField(
            model_name='boardmember',
            name='work',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
