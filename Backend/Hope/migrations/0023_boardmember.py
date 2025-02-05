# Generated by Django 5.1.2 on 2025-02-05 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Hope', '0022_resourcedetail_link'),
    ]

    operations = [
        migrations.CreateModel(
            name='BoardMember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('role', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='board_members/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
