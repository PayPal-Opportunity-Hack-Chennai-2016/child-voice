from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from wagtail.wagtailcore.models import Page
from wagtail.wagtailsearch.models import Query
import requests

try:
    # Wagtail >= 1.1
    from wagtail.contrib.wagtailsearchpromotions.models import SearchPromotion
except ImportError:
    # Wagtail < 1.1
    from wagtail.wagtailsearch.models import EditorsPick as SearchPromotion

def send_simple_message():
    return requests.post(
        "https://api.mailgun.net/v3/sandboxeeb88f43cd0248f0983239c425f90ab6.mailgun.org/messages",
        auth=("api", "key-267ace68e12daf2953d28972a5e7831c"),
        data={"from": "Mailgun Sandbox <postmaster@sandboxeeb88f43cd0248f0983239c425f90ab6.mailgun.org>",
              "to": "child <childvoiceindiaorg@gmail.com>",
              "subject": "Hello child",
              "text": "Congratulations child, you just sent an email with Mailgun!  You are truly awesome!  You can see a record of this email in your logs: https://mailgun.com/cp/log .  You can send up to 300 emails/day from this sandbox server.  Next, you should add your own domain so you can send 10,000 emails/month for free."})

def search(request):
    # Search
    send_simple_message()
    search_query = request.GET.get('query', None)
    if search_query:
        search_results = Page.objects.live().search(search_query)
        query = Query.get(search_query)

        # Record hit
        query.add_hit()

        # Get search picks
        search_picks = query.editors_picks.all()
    else:
        search_results = Page.objects.none()
        search_picks = SearchPromotion.objects.none()

    # Pagination
    page = request.GET.get('page', 1)
    paginator = Paginator(search_results, 10)
    try:
        search_results = paginator.page(page)
    except PageNotAnInteger:
        search_results = paginator.page(1)
    except EmptyPage:
        search_results = paginator.page(paginator.num_pages)

    return render(request, 'demo/search_results.html', {
        'search_query': search_query,
        'search_results': search_results,
        'search_picks': search_picks,
    })


