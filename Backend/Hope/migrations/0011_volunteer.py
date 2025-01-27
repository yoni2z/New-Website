# Generated by Django 5.1.4 on 2025-01-03 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Hope', '0010_rename_photogallery_gallery_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Volunteer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Name')),
                ('role', models.CharField(max_length=100, verbose_name='Role')),
                ('profile_image', models.ImageField(blank=True, null=True, upload_to='volunteers/', verbose_name='Profile Image')),
                ('email', models.EmailField(blank=True, max_length=255, null=True, verbose_name='Email Address')),
                ('phone_number', models.CharField(blank=True, max_length=15, null=True, verbose_name='Phone Number')),
                ('facebook_username', models.CharField(blank=True, max_length=100, null=True, verbose_name='Facebook Username')),
                ('twitter_username', models.CharField(blank=True, max_length=100, null=True, verbose_name='Twitter Username')),
                ('instagram_username', models.CharField(blank=True, max_length=100, null=True, verbose_name='Instagram Username')),
                ('facebook_url', models.URLField(blank=True, max_length=255, null=True, verbose_name='Facebook URL')),
                ('twitter_url', models.URLField(blank=True, max_length=255, null=True, verbose_name='Twitter URL')),
                ('instagram_url', models.URLField(blank=True, max_length=255, null=True, verbose_name='Instagram URL')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
