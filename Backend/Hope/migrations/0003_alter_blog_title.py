# Generated by Django 5.1.4 on 2024-12-31 12:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Hope', '0002_blog'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='title',
            field=models.CharField(max_length=300),
        ),
    ]
